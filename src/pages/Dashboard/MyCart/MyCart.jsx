import { Helmet } from "react-helmet-async";
import useCart from "../../../hooks/useCart";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";


const MyCart = () => {

    const [cart, refetch] = useCart();
    console.log(cart);

    const totalPrice = cart.reduce((sum, item) => item.price + sum, 0);
    console.log(totalPrice);

    const handleDelete = item => {
        Swal.fire({
            title: "Are you sure?",
            text: "Want to Delete this Item?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/carts/${item._id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })

            }
        });
    }

    return (
        <>
            <Helmet>
                <title>Fork Fable | MyCart</title>
            </Helmet>
            <div className=" flex justify-between uppercase">
                <h3 className="text-xl">Total Items: {cart.length}</h3>
                <h3 className="text-xl">Total Price: ${totalPrice}</h3>
                <button className="btn btn-warning">Pay</button>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                Id
                            </th>
                            <th>Image</th>
                            <th>Item Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map((item, index) =>
                            <tr key={item._id}>
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {item.name}
                                </td>
                                <td>${item.price}</td>
                                <th>
                                    <button onClick={() => handleDelete(item)} className="btn btn-ghost bg-red-600 text-white text-xl"><MdDelete /></button>
                                </th>
                            </tr>
                        )}
                    </tbody>

                </table>
            </div>
        </>
    );
};

export default MyCart;