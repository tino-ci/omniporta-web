import localFont from "next/font/local";
export const Manrope = localFont({
    src: [
        {
            path: "./Manrope_400.ttf",
            weight: "400",
            style: "normal",
        },
        {
            path: "./Manrope_500.ttf",
            weight: "500",
            style: "normal",
        },
        {
            path: "./Manrope_600.ttf",
            weight: "600",
            style: "normal",
        },
        {
            path: "./Manrope_700.ttf",
            weight: "700",
            style: "normal",
        }
    ],
    display: "swap"
})
