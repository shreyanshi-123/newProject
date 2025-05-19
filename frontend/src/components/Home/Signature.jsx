import { LazyLoadImage } from "react-lazy-load-image-component";

const Signature = ` ${process.env.REACT_APP_API_URL}/assets/images/signature.webp`
const chanellogo = ` ${process.env.REACT_APP_API_URL}/assets/images/chanel-logo.webp`


const Siggnature = () => {
    return (
        <section className="mt-[25px] lg:mt-[75px] pt-[25px] pb-[20px] lg:pt-[93px] lg:pb-[85px] bg-[#EDF2F9]">

            <div className="p-[15px]">
                <div className="text-center flex flex-col justify-center items-center">
                    <img decoding="async" src={chanellogo} className="brand w-[130px] mb-[20px] lg:mb-[40px]" />
                    <div className="entry-comment mx-auto mb-[16px] lg:mb-[40px] max-w-[840px] text-[16px] lg:text-[26px] text-black"><p>Eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodobendo viverra maecenas accumsan lacus vel facilisis libero.</p></div>
                    <img decoding="async" src={Signature} className="signature w-[202px] mb-[20px] lg:mb-[40px]" />
                    <h4 className="entry-author text-black opacity-[0.6] font-semibold tracking-[1px] uppercase text-[12px]">CHANEL CEO</h4>
                </div>
            </div>

        </section>)
}

export default Siggnature;