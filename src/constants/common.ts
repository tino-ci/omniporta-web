export const enum PATH_URL {
    HOME = '/',

    KEY_FEATURES = '/#Features',
    ALPHA = '/alphaLaunch',

}
export const enum PATH_KEY {
    HOME = "home",

    KEY_FEATURES = "Features",
    ALPHA = "AlphaLaunch",

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
        path: PATH_URL.ALPHA,
        name: "Alpha Launch",
        key: PATH_KEY.ALPHA
    }
]

export const enum SOCIAL_MEDIA_URL {
    DISCORD = "https://discord.gg/zTD6prV5KS",
    TG = "https://t.me/Omniporta",
    X = "https://x.com/omni_porta",
    EMAIL = "mailto:contact@omniporta.com",
    FACEBOOK = "",
}
export const copyrightText = `©${new Date().getFullYear()}. Powered by Omniporta. All Rights Reserved.`

export const downloadURL = 'https://omniporta.com/wallet-activity/download'
