export const enum PATH_URL {
    HOME = '/',

    KEY_FEATURES = '/#Features',
    SUPPORT = '/#Support',

}
export const enum PATH_KEY {
    HOME = "home",

    KEY_FEATURES = "Features",
    SUPPORT = "Support",

}
export type NAV_TYPE = {
    path: string,
    name: string,
    key: string,
    external?: boolean
}
export const NAV_LIST: NAV_TYPE[] = [
    {
        path: PATH_URL.HOME,
        name: "Home",
        key: "home",
        external: false
    },


    {
        path: PATH_URL.KEY_FEATURES,
        name: "Features",
        key: PATH_KEY.KEY_FEATURES
    },
    {
        path: PATH_URL.SUPPORT,
        name: "Support",
        key: PATH_KEY.SUPPORT
    }
]

export const enum SOCIAL_MEDIA_URL {
    DISCORD = "",
    TG = "https://t.me/Omniporta",
    X = "https://x.com/omni_porta",
    EMAIL = "mailto:contact@omniporta.com",
    FACEBOOK = "",
}
export const copyrightText = `©${new Date().getFullYear()}. Powered by Omniporta. All Rights Reserved.`
