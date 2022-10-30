import qr_code from './img/qr-code.png';

export const Card = () => {
  return (
    <div className="w-[340px] bg-white h-[540px] m-auto shadow-md rounded-2xl p-4 flex flex-col gap-7">
        
        <img src={qr_code} alt className='rounded-[0.625rem]' />

        <div className='px-[1.875rem] text-center flex flex-col gap-3'>
            <h2 className='font-outfit font-bold text-[20px]'>Improve your front-end skill by building projects</h2>
            <p>Scan the QR code to visit Front Mentor and take your coding skills to the next level</p>
        </div>
    </div>
  )
}