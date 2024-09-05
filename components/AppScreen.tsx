import { forwardRef } from 'react'
import clsx from 'clsx'

export function Logomark(props: React.ComponentPropsWithoutRef<'svg'>) {
    return (
        <svg viewBox="0 0 40 40" aria-hidden="true" {...props}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M20 40C8.954 40 0 31.046 0 20S8.954 0 20 0s20 8.954 20 20-8.954 20-20 20ZM4 20c0 7.264 5.163 13.321 12.02 14.704C17.642 35.03 19 33.657 19 32V8c0-1.657-1.357-3.031-2.98-2.704C9.162 6.68 4 12.736 4 20Z"
            />
        </svg>
    )
}

function Logo(props: React.ComponentPropsWithoutRef<'svg'>) {
    return (
        <div className="flex gap-2 items-center">
            <svg viewBox="0 0 50 40" aria-hidden="true" {...props}>
                <Logomark width="" height="40" className="fill-cyan-500" />
            </svg>
            <h1 className="font-semibold text-xl text-white">MarketMind</h1>
        </div>
    )
}

function MenuIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
    return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
            <path
                d="M5 6h14M5 18h14M5 12h14"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

function UserIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
    return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
            <path
                d="M15 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.696 19h10.608c1.175 0 2.08-.935 1.532-1.897C18.028 15.69 16.187 14 12 14s-6.028 1.689-6.836 3.103C4.616 18.065 5.521 19 6.696 19Z"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

export function AppScreen({
    children,
    className,
    ...props
}: React.ComponentPropsWithoutRef<'div'>) {
    return (
        <div className={clsx('flex flex-col', className)} {...props}>
            <div className="flex justify-between px-4 pt-4">
                <MenuIcon className="h-6 w-6 flex-none" />
                <Logo className="h-6 flex-none" />
                <UserIcon className="h-6 w-6 flex-none" />
            </div>
            {children}
        </div>
    )
}

AppScreen.Header = forwardRef<
    React.ElementRef<'div'>,
    { children: React.ReactNode }
>(function AppScreenHeader({ children }, ref) {
    return (
        <div ref={ref} className="mt-6 px-4 text-white">
            {children}
        </div>
    )
})

AppScreen.Title = forwardRef<
    React.ElementRef<'div'>,
    { children: React.ReactNode }
>(function AppScreenTitle({ children }, ref) {
    return (
        <div ref={ref} className="text-2xl text-white">
            {children}
        </div>
    )
})

AppScreen.Subtitle = forwardRef<
    React.ElementRef<'div'>,
    { children: React.ReactNode }
>(function AppScreenSubtitle({ children }, ref) {
    return (
        <div ref={ref} className="text-sm text-gray-500">
            {children}
        </div>
    )
})

AppScreen.Body = forwardRef<
    React.ElementRef<'div'>,
    { className?: string; children: React.ReactNode }
>(function AppScreenBody({ children, className }, ref) {
    return (
        <div
            ref={ref}
            className={clsx('mt-6 flex-auto rounded-t-2xl bg-white', className)}
        >
            {children}
        </div>
    )
})
