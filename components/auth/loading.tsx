import Image from "next/image";

export const Loading = () => {
    return (
        <div className="h-full w-full flex flex-col justify-center items-center">
            <Image
                src="/logo.png"
                width={80}
                height={80}
                alt="Logo"
                className="animate-pulse duration-900 mb-4"
            />
            <h1>NextFlow</h1>
            <p>Your Gate Way To Realtime Collaboration</p>
        </div>
    );
};
