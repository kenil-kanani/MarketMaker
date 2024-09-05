import { Container } from '@/components/Container'

const faqs = [
    [
        {
            question: 'What kind of content can I expect from MarketMind?',
            answer: 'MarketMind provides in-depth analysis and market updates, helping you stay informed about the latest trends and insights.',
        },
        {
            question: 'How will I receive your daily analytical reports?',
            answer: 'We\'ll send you a PDF containing our daily analysis and market update via email before the market starts. This way, you can stay ahead of the game and make informed decisions.',
        },
        {
            question: 'Is MarketMind\'s content suitable for all investors?',
            answer: 'Our content is designed to cater to various investor types, from beginners to seasoned traders. We strive to provide valuable insights that help everyone improve their market understanding.',
        },
    ],
    [
        {
            question: 'Will I have access to exclusive market analysis on MarketMind?',
            answer: 'Yes! Our team of analysts works tirelessly to bring you unique perspectives and in-depth analysis, giving you a competitive edge in the markets.',
        },
        {
            question: 'Can I use MarketMind\'s content for personal or professional purposes?',
            answer: 'You\'re free to use our content for both personal and professional purposes. We encourage sharing and discussing our insights with others, as long as it\'s not for commercial purposes without prior permission.',
        },
        {
            question: 'How do I unsubscribe from MarketMind\'s daily reports if needed ? ',
            answer: 'You can easily unsubscribe by clicking the "Unsubscribe" link at the bottom of any email you receive from us. We respect your time and preferences, and it\'s always easy to opt out.',
        },
    ],
    [
        {
            question: 'What is MarketMind\'s mission and vision?',
            answer: 'Our mission is to empower investors with accurate and timely market analysis, helping them make informed decisions. Our vision is to become the go-to source for reliable market insights, trusted by investors worldwide.',
        },
        {
            question: 'Can I provide feedback or suggestions on MarketMind\'s content ? ',
            answer: 'We value your input! If you have any feedback, suggestions, or ideas, please don\'t hesitate to reach out. We\'re always looking for ways to improve and serve our community better.',
        },
    ],
];

export function Faqs() {
    return (
        <section
            id="faqs"
            aria-labelledby="faqs-title"
            className="border-t border-gray-200 py-20 sm:py-32"
        >
            <Container>
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2
                        id="faqs-title"
                        className="text-3xl font-medium tracking-tight text-gray-900"
                    >
                        Frequently asked questions
                    </h2>
                    <p className="mt-2 text-lg text-gray-600">
                        If you have anything else you want to ask,{' '}
                        <a
                            href="mailto:info@marketmind.com"
                            className="text-gray-900 underline"
                        >
                            reach out to us
                        </a>
                        {' '}Or on Whatsapp.
                    </p>
                </div>
                <ul
                    role="list"
                    className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-3"
                >
                    {faqs.map((column, columnIndex) => (
                        <li key={columnIndex}>
                            <ul role="list" className="space-y-10">
                                {column.map((faq, faqIndex) => (
                                    <li key={faqIndex}>
                                        <h3 className="text-lg font-semibold leading-6 text-gray-900">
                                            {faq.question}
                                        </h3>
                                        <p className="mt-4 text-sm text-gray-700">{faq.answer}</p>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            </Container>
        </section>
    )
}
