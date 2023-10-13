export default function Item({ name, quantity, category }) {



    return (
        <main>
            <div className="p-2 m-4 bg-slate-900 max-w-sm" >
                <h3 className="text-xl font-bold">{name}</h3>
                <p>Buy {quantity} in {category}</p>
            </div>
        </main>
    );
}