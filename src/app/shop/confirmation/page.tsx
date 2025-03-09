"use client";

import { pageData } from "@/data/pageData";
import { twMerge } from "tailwind-merge";
import { selectedDesignStyle } from "@/lib/utilities/designStyle/designStyle";
import { ScrollSpy, initTWE } from "tw-elements";
import { useDispatch, useSelector } from "react-redux";
import { setBreadcrumbs } from "@/store/breadcrumbsSlice";
import { useEffect, useState, useMemo } from "react";
import Hero from "@/components/hero";
import contentRenderer from "@/lib/utilities/contentRendering/contentRenderer";
import { ContentRendererParams } from "@/app/types";
import Headline2 from "@/components/headline2";
import Image from "next/image";
import { RootState } from "@/store/store";
import { getProductData } from "@/lib/utilities/fetchProductData/fetchProductData";
import { addToCart, updateAmount } from "@/store/cartSlice";
import Button from "@/components/button";

// initTWE({ ScrollSpy });

export default function Confirmation({
  params,
}: {
  params: ContentRendererParams;
}) {
  if (!params) {
    throw new Error("Params is undefined");
  }

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const {
    global,
    button,
    sidebarNav: sidebarNavDesignConfig,
  } = selectedDesignStyle || {};
  const { main, hero: heroDesignConfig } = selectedDesignStyle || {};
  const { breadcrumbs: breadcrumbsConfig } = pageData.general;
  const dispatch = useDispatch();

  // Define breadcrumbs using the extracted navLabel
  const breadcrumbs = useMemo(
    () => [{ label: breadcrumbsConfig.initialLabel }],
    []
  );

  // Update breadcrumbs in Redux on component mount
  useEffect(() => {
    dispatch(setBreadcrumbs(breadcrumbs));
  }, [dispatch, breadcrumbs]);

  const generatedContent = contentRenderer(params);

  const cartItems = useSelector((state: RootState) => state.cart.items);

  /*   console.log("cartItems CONFIRMATION", cartItems); */

  // Fetch product data and set loading
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

  // Create final array of products in the cart with amount > 0
  const finalCartData = useMemo(() => {
    if (loading || !products.length || !cartItems.length) return [];

    return cartItems
      .filter((item) => item.amount > 0) // Filter cart items with amount > 0
      .map((cartItem) => {
        const productData = products.find(
          (product: any) => product._id === cartItem.id
        );
        if (!productData) return null;

        return {
          ...(productData as object), // Extract all product data
          amount: cartItem.amount, // Add the amount from the cart
        };
      })
      .filter(Boolean); // Filter out any null values (in case product data wasn't found)
  }, [cartItems, products, loading]);

  /*   console.log("Final Cart Data:", finalCartData); */

  if (loading) {
    return <p>Loading products...</p>;
  }

  console.log("Products confirmation", products);

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

  return (
    <>
      <div
        className={twMerge(
          "block w-full dark:bg-surface-dark dark:text-white",
          main?.designAdditionalClassName
        )}
      >
        <div className="">
          {!heroDesignConfig?.fullWidth && <Hero />}
          <div className="grid grid-cols-3 gap-x-6 pb-14">
            <div className="col-span-2 mt-5">
              <div
                data-twe-spy="scroll"
                data-twe-target="#scrollspy-smooth"
                data-twe-offset="0"
                className="relative"
              >
                {/* Render content blocks */}
                <div>CONTENT 1</div>
                <div>CONTENT 1</div>
                <div>CONTENT 1</div>
                <div>CONTENT 1</div>
                <div>CONTENT 1</div>
                <div>CONTENT 1</div>
                <div>CONTENT 1</div>
                <div>CONTENT 1</div>
                <div>CONTENT 1</div>
                <div>CONTENT 1</div>
                <div>CONTENT 1</div>
                <div>CONTENT 1</div>
                <div>CONTENT 1</div>
                <div>CONTENT 1</div>
                <div>CONTENT 1</div>
                <div>CONTENT 1</div>
                <div>CONTENT 1</div>
                <div>CONTENT 1</div>
                <div>CONTENT 1</div>
                <div>CONTENT 1</div>
              </div>
            </div>

            {/* Render sidebarNav */}
            <div className="mt-5">
              <div
                id="scrollspy-smooth"
                className={twMerge(
                  "sticky top-0 px-3 py-3",
                  sidebarNavDesignConfig?.backgroundColor,
                  "bg-opacity-20"
                )}
              >
                <div className="mb-5">
                  <Headline2>Objednávka</Headline2>
                </div>

                {finalCartData.length === 0 ? (
                  <p>No products in cart.</p>
                ) : (
                  finalCartData.map((product: any) => (
                    <div key={product._id} className="mb-4  ">
                      {/* Add margin bottom for vertical spacing */}
                      <div className="grid grid-cols-[15%,47%,15%,17%] gap-x-[2%] text-left w-full items-center">
                        <Image
                          src={`/labels/${product.productLabel}`}
                          alt="Classic Label"
                          sizes="100vw"
                          width={500}
                          height={500}
                          style={{
                            width: "100%",
                            height: "auto",
                          }}
                        />
                        <div className="">
                          <div className="font-bold">
                            {product.productBrand} {product.productName}
                          </div>
                          <div>{product.productVolume} ml</div>
                        </div>
                        {/* <div className="bg-red-500">{product.amount} ks</div> */}

                        {/* Input field */}

                        <div
                          className="font-bold w-full grid grid-cols-[19%,62%,19%] h-full"
                          style={{ color: global?.secondaryColorDefault }}
                        >
                          {/* Decrement amount   */}
                          <div className="h-full text-white">
                            <button
                              className={twMerge(
                                "rounded-l-md flex items-center justify-center h-full w-full opacity-50 hover:opacity-70 active:opacity-50",
                                button?.primary.color
                              )}
                              onClick={() => handleDecreaseAmount(product, 1)}
                            >
                              -
                            </button>
                          </div>

                          <div className="flex items-center justify-center h-full">
                            <input
                              type="number" // Use "number" type to allow only numeric input
                              name="amount"
                              id="amount"
                              className={twMerge(
                                "appearance-none text-center h-full w-full ring-1 bg-primary-light bg-opacity-90 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-dark text-base sm:text-lg"
                              )}
                              value={product.amount} // Redux-managed value
                              onChange={(e) => handleInputChange(e, product)}
                              onFocus={(e) =>
                                handleInputFocus(e, product.amount)
                              }
                              onBlur={(e) => handleInputBlur(e, product)}
                            />
                          </div>

                          {/* Increment amount */}
                          <div className="h-full text-white">
                            <button
                              className={twMerge(
                                "rounded-r-md flex items-center justify-center h-full w-full opacity-50 hover:opacity-70 active:opacity-50",
                                button?.primary.color
                              )}
                              onClick={() => handleIncreaseAmount(product, 1)}
                            >
                              +
                            </button>
                          </div>
                        </div>

                        <div className="text-2xl  whitespace-nowrap text-right">
                          {(product.productVolume * product.amount).toFixed(2)}{" "}
                          €
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
