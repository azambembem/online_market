import { Button } from "@/components/ui/button";

const Cart = () => {
  return (
    <div className="w-[90%] mt-12 m-auto">
      {/* 헤더 네비게이션 */}
      <div className="flex items-center gap-2 text-sm mb-8 ml-6">
        <span className="text-gray-500">Home</span>
        <span className="text-gray-500">/</span>
        <span>Cart</span>
      </div>

      {/* 장바구니 테이블 */}
      <div className="mb-8 ml-6">
        <div className="grid grid-cols-4 gap-4 mb-4 font-medium">
          <div>Product</div>
          <div>Price</div>
          <div>Quantity</div>
          <div>Subtotal</div>
        </div>

        <div className="grid grid-cols-4 gap-4 items-center py-4 border-t">
          <div className="flex items-center gap-4 ">
            <button className="text-red-500 text-xl">&times;</button>
            <img
              src="https://th.bing.com/th/id/OIP.eePT_ymcVz7QmZM58NI_YwHaDa?w=315&h=161&c=7&r=0&o=5&dpr=1.3&pid=1.7"
              className="w-16 h-16 object-cover"
            />
            <span>http</span>
          </div>
          <div>$130</div>
          <div>
            <div className="inline-flex border rounded">
              <Button className="px-4 py-1 border-r" variant="ghost">
                -
              </Button>
              <Button className="px-4 py-1 border-l " variant="ghost">
                +
              </Button>
            </div>
          </div>
          <div className="ml-2">$120</div>
        </div>
      </div>

      {/* 하단 버튼 */}
      <div className="flex justify-between mb-8">
        <Button
          className="px-6 py-2 border rounded hover:bg-gray-50"
          variant="ghost"
        >
          Return To Shop
        </Button>
        <Button
          className="px-6 py-4 border rounded hover:bg-gray-50"
          variant="ghost"
        >
          Update Cart
        </Button>
      </div>

      {/* 쿠폰 입력 */}
      <div className="flex gap-4 mb-8">
        <input
          type="text"
          placeholder="Coupon Code"
          className="border rounded px-4 py-2"
        />
        <button className="px-6 py-2 bg-red-500 text-white rounded hover:bg-red-600">
          Apply Coupon
        </button>
      </div>

      {/* 카트 총계 */}
      <div className="ml-auto max-w-sm mb-4">
        <h2 className="font-medium mb-4">Cart Total</h2>
        <div className="border rounded p-4">
          <div className="flex justify-between mb-2">
            <span>Subtotal:</span>
            <span>$300</span>
          </div>
          <div className="flex justify-between mb-4">
            <span>Shipping:</span>
            <span>Free</span>
          </div>
          <div className="flex justify-between mb-4 font-medium">
            <span>Total:</span>
            <span>$300</span>
          </div>
          <button className="w-full py-2 bg-red-500 text-white rounded hover:bg-red-600">
            Process to checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;

// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { RootStore } from "@/redux/index";
// import { useReduxDispatch } from "@/hooks/useRedux";
// import { updateQuantity, removeFromCart } from "@/redux/slice/cart";
// import { toast } from "sonner";

// const Cart = () => {
//   const navigate = useNavigate();
//   const dispatch = useReduxDispatch();
//   const cartItems = useSelector((state: RootStore) => state.cart.items);

//   const handleUpdateQuantity = (id: string, newQuantity: number) => {
//     if (newQuantity === 0) {
//       dispatch(removeFromCart(id));
//       toast("Item removed from cart");
//     } else {
//       dispatch(updateQuantity({ id, quantity: newQuantity }));
//     }
//   };

//   const subtotal = cartItems.reduce(
//     (sum, item) => sum + item.price * item.quantity,
//     0
//   );

//   return (
//     <div className="w-[90%] mt-12 m-auto">
//       {/* 헤더 네비게이션 */}
//       <div className="flex items-center gap-2 text-sm mb-8 ml-6">
//         <span
//           className="text-gray-500 cursor-pointer hover:text-black"
//           onClick={() => navigate("/")}
//         >
//           Home
//         </span>
//         <span className="text-gray-500">/</span>
//         <span>Cart</span>
//       </div>

//       {/* 장바구니 테이블 */}
//       <div className="mb-8 ml-6">
//         <div className="grid grid-cols-4 gap-4 mb-4 font-medium">
//           <div>Product</div>
//           <div>Price</div>
//           <div>Quantity</div>
//           <div>Subtotal</div>
//         </div>

//         {cartItems.length === 0 ? (
//           <div className="text-center py-8 text-gray-500">
//             Your cart is empty. Start shopping!
//           </div>
//         ) : (
//           cartItems.map((item) => (
//             <div
//               key={item._id}
//               className="grid grid-cols-4 gap-4 items-center py-4 border-t"
//             >
//               <div className="flex items-center gap-4">
//                 <button
//                   className="text-red-500 text-xl"
//                   onClick={() => {
//                     dispatch(removeFromCart(item._id));
//                     toast("Item removed from cart");
//                   }}
//                 >
//                   &times;
//                 </button>
//                 <img
//                   src={item.main_image}
//                   alt={item.name}
//                   className="w-16 h-16 object-cover"
//                 />
//                 <span>{item.name}</span>
//               </div>
//               <div>${item.price}</div>
//               <div className="ml-6">
//                 <div className="inline-flex border rounded">
//                   <button
//                     className="px-2 py-1 border-r"
//                     onClick={() =>
//                       handleUpdateQuantity(item._id, item.quantity - 1)
//                     }
//                   >
//                     -
//                   </button>
//                   <span className="px-4 py-1">{item.quantity}</span>
//                   <button
//                     className="px-2 py-1 border-l"
//                     onClick={() =>
//                       handleUpdateQuantity(item._id, item.quantity + 1)
//                     }
//                   >
//                     +
//                   </button>
//                 </div>
//               </div>
//               <div>${item.price * item.quantity}</div>
//             </div>
//           ))
//         )}
//       </div>

//       {/* 하단 버튼 */}
//       <div className="flex justify-between mb-8">
//         <button
//           className="px-6 py-2 border rounded hover:bg-gray-50"
//           onClick={() => navigate("/")}
//         >
//           Return To Shop
//         </button>
//         <button
//           className="px-6 py-2 border rounded hover:bg-gray-50"
//           onClick={() => toast("Cart updated")}
//         >
//           Update Cart
//         </button>
//       </div>

//       {/* 쿠폰 입력 */}
//       <div className="flex gap-4 mb-8">
//         <input
//           type="text"
//           placeholder="Coupon Code"
//           className="border rounded px-4 py-2"
//         />
//         <button
//           className="px-6 py-2 bg-red-500 text-white rounded hover:bg-red-600"
//           onClick={() => toast("Coupon applied")}
//         >
//           Apply Coupon
//         </button>
//       </div>

//       {/* 카트 총계 */}
//       <div className="ml-auto max-w-sm mb-4">
//         <h2 className="font-medium mb-4">Cart Total</h2>
//         <div className="border rounded p-4">
//           <div className="flex justify-between mb-2">
//             <span>Subtotal:</span>
//             <span>${subtotal}</span>
//           </div>
//           <div className="flex justify-between mb-4">
//             <span>Shipping:</span>
//             <span>Free</span>
//           </div>
//           <div className="flex justify-between mb-4 font-medium">
//             <span>Total:</span>
//             <span>${subtotal}</span>
//           </div>
//           <button
//             className="w-full py-2 bg-red-500 text-white rounded hover:bg-red-600"
//             onClick={() => {
//               navigate("/checkout");
//               toast("Proceeding to checkout");
//             }}
//           >
//             Process to checkout
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cart;
