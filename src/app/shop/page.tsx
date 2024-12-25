"use client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { addToCart, updateAmount } from "@/store/cartSlice";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import VeganIcon from "/public/icon/vegan.svg";
import LactoseFreeIcon from "/public/icon/lactose_free.svg";
import GlutenFreeIcon from "/public/icon/gluten_free.svg";
import { pageData } from "@/data/pageData";
import { selectedDesignStyle } from "@/lib/utilities/designStyle/designStyle";
import { getProductData } from "@/lib/utilities/fetchProductData/fetchProductData";
import Button from "@/components/button";
import Link from "next/link";

export default function Shop() {
  const { general } = pageData;
  const { global, button } = selectedDesignStyle || {};
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  console.log("cartItems", cartItems);

  // START

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    product: any
  ) => {
    const newValue = e.target.value;

    if (!isNaN(Number(newValue))) {
      const insertedAmount = Number(newValue);

      // If the product is not in the cart, add it
      const existingItem = cartItems.find((item) => item.id === product._id);
      if (!existingItem) {
        addProductToCart(product, insertedAmount); // Add product to cart with the inserted amount
      } else {
        // Update the amount directly in Redux
        dispatch(
          updateAmount({
            id: product._id,
            amount: insertedAmount,
          })
        );
      }
    }
  };

  const handleInputFocus = (
    e: React.FocusEvent<HTMLInputElement>,
    currentAmount: number
  ) => {
    if (currentAmount === 0) {
      e.target.value = ""; // Clear the input if the value is 0 when focused
    }
  };

  const handleInputBlur = (
    e: React.FocusEvent<HTMLInputElement>,
    product: any
  ) => {
    if (e.target.value === "") {
      dispatch(updateAmount({ id: product._id, amount: 0 })); // Reset to 0 if empty when focus is lost
      e.target.value = "0";
    }
  };

  //   END

  useEffect(() => {
    console.log("Cart items updated:", cartItems);
  }, [cartItems]); // This will log when `cartItems` changes

  const addProductToCart = (product: any, amount: number) => {
    if (amount > 0) {
      dispatch(
        addToCart({ id: product._id, name: product.productName, amount })
      );
    }
  };

  const handleIncreaseAmount = (product: any, increment: number) => {
    // if (cartItems.length === 0) {
    //   addProductToCart(product, increment); // If cart is empty, add the product
    // }

    if (!cartItems.find((item) => item.id === product._id)) {
      addProductToCart(product, increment); // If product is not in the cart, add it
    }

    const currentAmount =
      cartItems.find((item) => item.id === product._id)?.amount || 0;
    const newAmount = currentAmount + increment;
    console.log("newAmount", newAmount);
    dispatch(updateAmount({ id: product._id, amount: newAmount }));
  };

  const handleDecreaseAmount = (product: any, decrement: number) => {
    const currentAmount =
      cartItems.find((item) => item.id === product._id)?.amount || 0;

    // If the decrement would make the amount negative, set the amount to 0
    const newAmount = Math.max(0, currentAmount - decrement);

    // Always update the amount, whether it's positive or set to 0
    dispatch(updateAmount({ id: product._id, amount: newAmount }));

    // Log for debugging
    console.log(
      "Product decreased:",
      product.productName,
      "New amount:",
      newAmount
    );
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productsAPI = await getProductData();
        setProducts(productsAPI.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching product data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading products...</p>;
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product: any) => {
          const currentAmount =
            cartItems.find((item) => item.id === product._id)?.amount || 0;

          return (
            <div
              key={product._id}
              className="relative bg-white rounded-sm hover:scale-105 duration-150 shadow-lg "
              style={{ height: "100%" }}
            >
              {/* Promotion label */}
              <div className="absolute top-0 right-0 bg-red-500 text-white p-2 rounded-tr-md rounded-bl-md">
                Akcia
              </div>

              {/* Features icons */}
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                <div className="flex items-center justify-center bg-green-200 rounded-full p-2">
                  <VeganIcon className="w-6 h-6 text-green-700" />
                </div>
                <div className="flex items-center justify-center bg-yellow-200 rounded-full p-2">
                  <LactoseFreeIcon className="w-6 h-6 text-yellow-600 " />
                </div>
                <div className="flex items-center justify-center bg-blue-200 rounded-full p-2">
                  <GlutenFreeIcon className="w-6 h-6 text-blue-700 " />
                </div>
              </div>

              {/* Product details */}
              <div className="grid grid-rows-[68%,20%,12%] h-72 lg:h-96">
                <div className="relative">
                  <Image
                    className="py-4"
                    src={product.productPicture}
                    alt={product.productName}
                    fill
                    sizes="(min-width: 808px) 50vw, 100vw"
                    style={{ objectFit: "contain" }}
                  />
                </div>

                {/* Product info */}
                <div className="flex flex-row justify-between">
                  <div className="flex flex-col justify-center px-4">
                    <div
                      className="font-bold"
                      style={{ color: global?.secondaryColorDefault }}
                    >
                      <span>{product.productBrand}</span>{" "}
                      <span className="whitespace-nowrap">
                        {product.productName}
                      </span>
                    </div>
                    <div>
                      <p>{product.productVolume} ml</p>
                    </div>
                  </div>
                  <div
                    className="flex flex-col justify-center font-bold opacity-80 text-2xl px-4 whitespace-nowrap"
                    style={{ color: global?.secondaryColorDefault }}
                  >
                    {product.productVolume} €
                  </div>
                </div>

                {/* Cart controls */}
                <div className="flex items-center justify-center border-t-2 rounded-b-md h-full">
                  <div
                    className="font-bold w-full grid grid-cols-3 h-full"
                    style={{ color: global?.secondaryColorDefault }}
                  >
                    {/* Decrement amount   */}
                    <div className="grid grid-cols-2 h-full text-white">
                      <button
                        className={twMerge(
                          "flex items-center justify-center h-full rounded-bl-md hover:opacity-80 active:opacity-50",
                          button?.primary.color
                        )}
                        onClick={() => handleDecreaseAmount(product, 10)}
                      >
                        - 10
                      </button>
                      <button
                        className={twMerge(
                          "flex items-center justify-center h-full opacity-50 hover:opacity-70 active:opacity-50",
                          button?.primary.color
                        )}
                        onClick={() => handleDecreaseAmount(product, 1)}
                      >
                        - 1
                      </button>
                    </div>

                    {/* Input field */}

                    <div className="flex items-center justify-center h-full">
                      <input
                        type="number" // Use "number" type to allow only numeric input
                        name="amount"
                        id="amount"
                        className={twMerge(
                          "appearance-none text-center h-full w-full ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-dark text-base sm:text-lg"
                        )}
                        value={currentAmount} // Redux-managed value
                        onChange={(e) => handleInputChange(e, product)}
                        onFocus={(e) => handleInputFocus(e, currentAmount)}
                        onBlur={(e) => handleInputBlur(e, product)}
                      />
                    </div>

                    {/* Increment amount */}
                    <div className="grid grid-cols-2 h-full text-white">
                      <button
                        className={twMerge(
                          "flex items-center justify-center h-full opacity-50 hover:opacity-70 active:opacity-50",
                          button?.primary.color
                        )}
                        onClick={() => handleIncreaseAmount(product, 1)}
                      >
                        + 1
                      </button>
                      <button
                        className={twMerge(
                          "flex items-center justify-center h-full rounded-br-md hover:opacity-80 active:opacity-50",
                          button?.primary.color
                        )}
                        onClick={() => handleIncreaseAmount(product, 10)}
                      >
                        + 10
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex items-center justify-center">
        <Link href="/shop/confirmation">
          <Button>Continue</Button>
        </Link>
      </div>
    </>
  );
}
