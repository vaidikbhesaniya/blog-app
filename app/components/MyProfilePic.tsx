import Image from "next/image"

export default function MyProfilePic() {
    return (
        <section className="w-full mx-auto flex relative justify-center top-[160px] sm:top-[370px] md:top-[350px] z-[-100]">
            <Image
                className=""
                src="/myphoto.jpeg"
                width={700}
                height={700}
                alt="Vaidik"
                priority={true}
            />
        </section>
    )
}