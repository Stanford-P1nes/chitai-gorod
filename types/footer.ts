interface SocialLink {
    icon: 'vk' | 'instagram' | 'tiktok' | 'youtube' | 'telegram';
    url: string;
}

interface NavigationLink {
    title: string;
    to: string;
}

interface FooterColumn {
    title: string;
    links: NavigationLink[];
}

interface Note {
    text: string;
    link: NavigationLink;
}

export interface FooterData {
    contacts: {
        phone: string;
        links: NavigationLink[];
        socials: SocialLink[];
    };
    columns: FooterColumn[];
    payment: ('mir' | 'visa' | 'mastercard')[];
    note: Note;
}
