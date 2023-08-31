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
    
    title: {
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        fontSize: 40,
        lineHeight: 1.2,
        fontWeight: 900,

        [theme.fn.smallerThan('xs')]: {
            fontSize: 28,
        },
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