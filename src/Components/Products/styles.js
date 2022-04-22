import {makeStyles} from '@material-ui/core/styles'

export default makeStyles((theme) => ({
    media: {
        height: 0,
        paddingTop: '100%'
    },
    root: {
        maxWidth: '100%',
    },
    card: {
        height: '260px'
    },
    CardActions: {
        display: 'flex',
        justifyContent: 'flex-end'
    },
    CardContent: {
        display: 'flex',
        justifyContent: 'space-between',
        maxHeight: '300px'
    },
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(4),
    },
    available: {
        fontSize: '20px',
        borderRadius: '30%',
        backgroundColor: 'yellow',
        padding: '2px 6px',
        margin: 'auto',
        width: '50px'
    }
}))