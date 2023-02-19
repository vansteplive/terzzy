import localFont from "@next/font/local";

export const clashDisplay = localFont({
    src: [
        {
            path: "../../assets/fonts/ClashDisplay-Bold.woff2",
            weight: "bold",
            style: "normal",
        },
        {
            path: "../../assets/fonts/ClashDisplay-Extralight.woff2",
            weight: "200",
            style: "normal",
        },
        {
            path: "../../assets/fonts/ClashDisplay-Light.woff2",
            weight: "300",
            style: "normal",
        },
        {
            path: "../../assets/fonts/ClashDisplay-Medium.woff2",
            weight: "500",
            style: "normal",
        },
        {
            path: "../../assets/fonts/ClashDisplay-Regular.woff2",
            weight: "normal",
            style: "normal",
        },
        {
            path: "../../assets/fonts/ClashDisplay-Semibold.woff2",
            weight: "600",
            style: "normal",
        },
    ],
});
