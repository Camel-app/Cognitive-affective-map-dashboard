import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
    inner: {
		display: "flex",
		justifyContent: "space-between",
		paddingTop: theme.spacing.xl * 4,
		paddingBottom: theme.spacing.xl * 4,
	},

	content: {
		maxWidth: 480,
		marginRight: theme.spacing.xl * 3,
		[theme.fn.smallerThan("md")]: { maxWidth: "100%", marginRight: 0 },
	},

	title: {
		color: theme.colorScheme === "dark" ? theme.white : theme.black,
		fontFamily: `Greycliff CF, ${theme.fontFamily}`,
		fontSize: 44,
		lineHeight: 1.2,
		fontWeight: 900,
		[theme.fn.smallerThan("xs")]: { fontSize: 28 },
	},

	control: { [theme.fn.smallerThan("xs")]: { flex: 1 } },
	image: { flex: 1, [theme.fn.smallerThan("md")]: { display: "none" } },

	highlight: {
		position: "relative",
		borderRadius: theme.radius.sm,
		padding: "4px 12px",
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