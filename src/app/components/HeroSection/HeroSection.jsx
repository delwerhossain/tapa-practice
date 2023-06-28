import Image from "next/image";

const HeroSection = () => {
    return (
     <section class="px-3 py-5 bg-neutral-100 lg:py-10">
  <div class="grid lg:grid-cols-2 items-center justify-items-center gap-5">
    <div class="order-2 lg:order-1 flex flex-col justify-center items-center">
      <p class="text-4xl font-bold md:text-7xl text-orange-600">25% OFF</p>
      <p class="text-4xl font-bold md:text-7xl">SUMMER SALE</p>
      <p class="mt-2 text-sm md:text-lg">For limited time only!</p>
      <button class="text-lg md:text-2xl bg-black text-white py-2 px-5 mt-10 hover:bg-zinc-800">Shop Now</button>
    </div>
    <div class="order-1 lg:order-2">
      <Image loading="lazy" height={320} width={320} class="h-80 w-80 object-cover lg:w-[500px] lg:h-[500px]" src="https://images.unsplash.com/photo-1615397349754-cfa2066a298e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80" alt=""/>
    </div>
  </div> 
</section>
    );
};

export default HeroSection;