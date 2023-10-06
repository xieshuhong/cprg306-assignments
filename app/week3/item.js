export default function Item({ name, quantity, category }) {
    return (
        <div className="border border-grey-500 rounded-2xl grayscale bg-blue-100 w-full max-w-xs m-4 p-2 mb-8" >
        <h3 className="text-xl font-bold">{name}</h3>
        <p>Buy {quantity} in {category}</p>
      </div>
    );
  }