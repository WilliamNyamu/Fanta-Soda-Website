import React from 'react'

const faqData = [
    {
        question: "What is the Fantasia?",
        answer: "Fantasia is a fictional drink that is made from the finest ingredients in the world. It is a drink that is made to make you feel like you are in a fantasy world."
    },
    {
        question: "How can I get Fantasia?",
        answer: "You can get Fantasia from our online store or from any of our retail locations. You can also order Fantasia from our website and have it delivered to your door."
    },
    {
        question: "What flavors does Fantasia come in?",
        answer: "Fantasia comes in a variety of flavors including orange, grape, strawberry, and lemon. We are always coming up with new flavors so be sure to check back often to see what new flavors we have."
    },
    {
        question: "Is Fantasia safe to drink?",
        answer: "Fantasia is made from the finest ingredients in the world and is completely safe to drink. We take great care in making sure that our drinks are of the highest quality and are safe for you to drink."
    },
    {
        question: "How can I contact Fantasia?",
        answer: "You can contact Fantasia by phone, email, or through our website. We are always happy to hear from our customers and are here to help you with any questions or concerns you may have."
    }
];

const Faq = () => {

    const [active, setActive] = React.useState(null);
    const handleClick = (index) => {
        if (active === index) {
            return setActive(null);
        }
        setActive(index);
    };
    return (
        <section className='bg-slate-100 py-2'>
            <div className='max-w-2xl mx-auto mt-20 mb-28 py-4'>
                <h1 className='text-3xl font-bold text-center pb-8'>
                    Frequently Asked Questions
                </h1>
                {faqData.map((item, index) => (
                    <div>
                        <div
                            onClick={() => handleClick(index)}
                            className='flex justify-between items-center bg-white p-4 rounded-md shadow-md cursor-pointer hover:shadow-lg transition duration-300'
                        >
                            <h1 className='text-lg font-bold'>{item.question}</h1>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                className={`h-6 w-6 ${active === index ? 'transform rotate-180' : ''}`}
                                fill='none'
                                viewBox='0 0 24 24'
                                stroke='currentColor'
                            >
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth='2'
                                    d='M19 9l-7 7-7-7'
                                />
                            </svg>
                        </div>
                        {active === index && (
                            <div className='bg-white p-4 mt-4 rounded-md shadow-md'>
                                <p>{item.answer}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
        
  )
}

export default Faq;