import Image from "next/image";

export default function TopLeftImage() {
  return (
    <div className="hidden lg:block absolute top-0 left-0 mix-blend-color-dodge z-10 w-[200px] xl:w-[400px]">
      <Image
        width={400}
        height={400}
        src="/images/top-left-img.png"
        alt="Top Left Image"
      >

      </Image>
    </div>
  );
}
