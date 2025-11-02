export enum Country {
    RUSSIA = 'russia',
    USA = 'usa',
    CHINA = 'china',
    GERMANY = 'germany',
    FRANCE = 'france',
    KAZAKHSTAN = 'kazakhstan',
}

export type CountryData = {
    name: string;
    flag: string;
    placeholder: string;
    mask?: string;
};

export const countryData: Record<Country, CountryData> = {
    [Country.RUSSIA]: {
        name: 'Russia',
        flag: '/ico-flags/russia.svg',
        placeholder: '+7 (988) 777 66-55',
        mask: '+7 (###) ###-####',
    },
    [Country.USA]: {
        name: 'USA',
        flag: '/ico-flags/usa.svg',
        placeholder: '+1 (555) 123-4567',
        mask: '+1 (###) ###-####',
    },
    [Country.CHINA]: {
        name: 'China',
        flag: '/ico-flags/china.svg',
        placeholder: '+86 138 0013 8000',
        mask: '+86 ### #### ####',
    },
    [Country.GERMANY]: {
        name: 'Germany',
        flag: '/ico-flags/germany.svg',
        placeholder: '+49 1512 3456789',
        mask: '+49 #### ########',
    },
    [Country.FRANCE]: {
        name: 'France',
        flag: '/ico-flags/france.svg',
        placeholder: '+33 6 12 34 56 78',
        mask: '+33 # ## ## ## ##',
    },
    [Country.KAZAKHSTAN]: {
        name: 'Kazakhstan',
        flag: '/ico-flags/kazakhstan.svg',
        placeholder: '+7 701 123 4567',
        mask: '+7 ### ### ####',
    },
};
