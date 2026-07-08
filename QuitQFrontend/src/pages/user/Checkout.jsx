import { useEffect, useState } from "react";
import api from "../../api/axios";
import {
  useNavigate,
  useSearchParams,
} from "react-router-dom";

import {
  showSuccess,
  showError,
} from "../../utils/toast";

import { validateCheckout }
  from "../../utils/validations/userValidation";

function Checkout() {

  const navigate = useNavigate();

  const [searchParams] = useSearchParams();

  const productId =
    searchParams.get("productId");

  const quantity =
    searchParams.get("quantity");

  const [addresses, setAddresses]
    = useState([]);

  const [selectedAddress,
    setSelectedAddress]
    = useState("");

  const [paymentMethod,
    setPaymentMethod]
    = useState(0);

  const [profile, setProfile]
    = useState(null);

  const [orderItems,
    setOrderItems]
    = useState([]);

  const [total, setTotal]
    = useState(0);
  
  const [offers, setOffers]
    = useState([]);
    
  const [discountedTotal, setDiscountedTotal]
  = useState(null);

  const [selectedOffer, setSelectedOffer]
  = useState(null);

  useEffect(() => {

    fetchProfile();

    loadAddresses();

    loadOrderSummary();

    loadOffers();

  }, []);

  // PROFILE
  const fetchProfile = async () => {

    try {

      const res =
        await api.get("/auth/profile");

      setProfile(res.data.data);

    } catch (err) {

      showError(
        err.response?.data?.message
      );
    }
  };

  // ADDRESSES
  const loadAddresses = async () => {

    try {

      const res =
        await api.get("/auth/address");

      setAddresses(res.data.data);

    } catch (err) {

      showError(
        err.response?.data?.message
      );
    }
  };

  // ORDER SUMMARY
  const loadOrderSummary = async () => {

    try {

      // BUY NOW
      if (productId) {

        const res = await api.get(
          `/product/${productId}`
        );

        const product = res.data.data;

        setOrderItems([
          {
            productId: product.id,
            name: product.name,
            imageUrl: product.imageUrl,
            price: product.price,
            quantity: Number(quantity),
          },
        ]);

      }

      // CART CHECKOUT
      else {

        const res = await api.get("/cart");

        setOrderItems(res.data.data);
      }

    } catch (err) {

      showError(
        err.response?.data?.message
      );
    }
  };

  const loadOffers = async () => {

    try {
  
      const res =
        await api.get("/offer");
  
      setOffers(res.data.data);
  
    } catch (err) {
  
      showError(
        err.response?.data?.message
      );
  
    }
  
  };

  // PLACE ORDER
  const placeOrder = async () => {

    const errorMessage =
      validateCheckout(
        selectedAddress,
        paymentMethod
      );

    if (errorMessage) {

      showError(errorMessage);

      return;
    }

    try {

      // BUY NOW
      if (productId) {

        await api.post(
          "/order/buy-now",
          null,
          {
            params: {
              productId,
              quantity,
              addressId:
                selectedAddress,
              paymentMethod,
            },
          }
        );
      }

      // CART CHECKOUT
      else {

        await api.post(
          "/order/checkout",
          {
            addressId:
              selectedAddress,
            paymentMethod,
          }
        );
      }

      showSuccess(
        "Order placed successfully"
      );

      navigate("/my-orders");

    } catch (err) {

      showError(
        err.response?.data?.message ||
        "Checkout failed"
      );
    }
  };

  return (

    <div className="container mt-5">

      <div className="row">

        {/* LEFT SIDE */}
        <div className="col-lg-7">

          <div className="card p-4 mb-4">

            <h3 className="mb-4">
              Shipping Details
            </h3>

            <input
              className="form-control mb-3"
              placeholder="Full Name"
              value={profile?.name || ""}
              readOnly
            />

            <input
              className="form-control mb-3"
              placeholder="Phone"
              value={profile?.phone || ""}
              readOnly
            />

            <select
              className="form-control mb-3"
              value={selectedAddress}
              onChange={(e) =>
                setSelectedAddress(
                  e.target.value
                )
              }
            >
              <option value="">
                Select Address
              </option>

              {addresses.map((a) => (

                <option
                  key={a.id}
                  value={a.id}
                >
                  {a.addressLine},
                  {" "}
                  {a.city}
                </option>

              ))}

            </select>

            <select
              className="form-control mb-3"
              value={paymentMethod}
              onChange={(e) =>
                setPaymentMethod(
                  parseInt(
                    e.target.value
                  )
                )
              }
            >
              <option value={0}>
                UPI
              </option>

              <option value={1}>
                Card
              </option>

              <option value={2}>
                Net Banking
              </option>

              <option value={3}>
                Cash On Delivery
              </option>

            </select>

            <button
              className="btn btn-success w-100"
              onClick={placeOrder}
            >
              Place Order
            </button>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="col-lg-5">

          <div className="card p-4">

            <h2 className="mb-4">
              Order Summary
            </h2>

            {orderItems.map((item) => {

              const productName =
                item.productName || item.name;

              const productPrice =
                item.unitPrice || item.price;

              return (

                <div
                  key={item.productId}
                  className="d-flex align-items-center mb-3 border-bottom pb-3"
                >

                  <div className="flex-grow-1">

                    <h6 className="mb-1">
                      {productName}
                    </h6>

                    <p className="mb-1">
                      Qty: {item.quantity}
                    </p>

                    <strong>
                      ₹ {productPrice}
                    </strong>

                  </div>

                </div>
              );
            })}
 <h5 className="mt-4 mb-3">
  Available Offers
</h5>

{offers.length > 0 ? (

  offers.map((offer) => (

    <div
      key={offer.id}
      className="border rounded p-3 mb-3"
    >

      <h6>{offer.title}</h6>

      <p className="mb-2">
        Discount: {offer.discountPercentage}%
      </p>

      <button
  className={
    selectedOffer?.id === offer.id
      ? "btn btn-danger btn-sm"
      : "btn btn-primary btn-sm"
  }
  onClick={() => {

    // Remove the currently applied offer
    if (selectedOffer?.id === offer.id) {

      setSelectedOffer(null);
      setDiscountedTotal(null);

      showSuccess("Offer removed");

      return;
    }

    // Don't allow another offer while one is active
    if (selectedOffer) {

      showError(
        "Only one offer can be applied at a time. Remove the current offer first."
      );

      return;
    }

    const totalItems = orderItems.reduce(
      (sum, item) => sum + item.quantity,
      0
    );

    if (totalItems <= 5) {

      showError(
        "You can avail this offer only when your order contains more than 5 items."
      );

      return;
    }

    const originalTotal = orderItems.reduce(
      (sum, item) =>
        sum +
        (item.unitPrice || item.price) * item.quantity,
      0
    );

    const discount =
      originalTotal * (offer.discountPercentage / 100);

    const finalTotal =
      originalTotal - discount;

    setDiscountedTotal(finalTotal);

    setSelectedOffer(offer);

    showSuccess(
      `${offer.title} applied successfully`
    );

  }}
>
  {
    selectedOffer?.id === offer.id
      ? "Remove Offer"
      : "Use Offer"
  }
</button>

    </div>

  ))

) : (

  <p>No Offers Available</p>

)}
            <hr />

            <h4 className="text-end">

  Total: ₹ {

    discountedTotal !== null

      ? discountedTotal.toFixed(2)

      : orderItems.reduce(
          (total, item) =>
            total +
            (item.unitPrice || item.price) *
            item.quantity,
          0
        ).toFixed(2)

  }

</h4>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Checkout;