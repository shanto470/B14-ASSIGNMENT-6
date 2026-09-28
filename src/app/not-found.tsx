export default function NotFound() {
    return (
        <div className="min-h-[70vh] flex flex-col items-center justify-center text-white">
            <h1 className="text-7xl font-black text-[#C2F800]">
                404
            </h1>

            <h2 className="text-2xl font-bold mt-4">
                Page Not Found
            </h2>

            <p className="text-gray-400 mt-2">
                The page you are looking for does not exist.
            </p>
        </div>
    );
}