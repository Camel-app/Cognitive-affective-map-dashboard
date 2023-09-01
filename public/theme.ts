import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
    inner: {
        display: 'flex',
        justifyContent: 'space-between',
        paddingTop: theme.spacing.xl * 0.5,
        paddingBottom: theme.spacing.xl * 0.5,
        fontSize: '22px'
    },
    listItems:{
        fontSize: 24,
        [theme.fn.smallerThan('xs')]: {
            fontSize: 16,
        },
    },
    root: {
        paddingTop: 80,
        paddingBottom: 80,
    },

    label: {
        textAlign: 'center',
        fontWeight: 900,
        fontSize: 220,
        lineHeight: 1,
        marginBottom: theme.spacing.xl * 1.5,
        color: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2],

        [theme.fn.smallerThan('sm')]: {
            fontSize: 120,
        },
    },

    title: {
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        textAlign: 'center',
        fontWeight: 900,
        fontSize: 38,

        [theme.fn.smallerThan('sm')]: {
            fontSize: 32,
        },
    },

    description: {
        maxWidth: 500,
        margin: 'auto',
        marginTop: theme.spacing.xl,
        marginBottom: theme.spacing.xl * 1.5,
    },

    contentBelowImage: {
        //marginLeft: 100,
        maxWidth: 960,
        marginRight: theme.spacing.xl * 3,

        [theme.fn.smallerThan('md')]: {
            maxWidth: '100%',
            marginRight: 0,
        },
    },

    contentNextImage: {
        maxWidth: 480,
        marginRight: theme.spacing.xl * 1,
        padding: 10,

        [theme.fn.smallerThan('md')]: {
            maxWidth: '100%',
            marginRight: 0,
        },
        fontSize: 24,
    },
    
    subtitle: {
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        fontSize: 30,
        lineHeight: 1,
        fontWeight: 900,

        [theme.fn.smallerThan('xs')]: {
            fontSize: 20,
        },
    },

    control: {
        [theme.fn.smallerThan('xs')]: {
            flex: 1,
        },
    },

    image: {
        flex: 1,

        [theme.fn.smallerThan('md')]: {
            display: 'none',
        },
        marginTop: 'auto',
        marginBlockEnd: 'auto',
    },

    highlight: {
        fontSize: 46,
        position: 'relative',
        //backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
        borderRadius: theme.radius.sm,
    },

    internalLinks: {
        color: 'black',
        textDecoration: 'underline'
    },

    outerDiv: {
        margin: 'auto',
        border: '1px solid black',
        fontSize: '20px'
    }
}));