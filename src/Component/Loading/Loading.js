import Image from '../../Assets/833.gif'
import { Box } from '@mui/system';

const Loading = () => {
    return (
        <>
            <Box style={{ display: "flex", flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <img src={Image} alt="load"></img>
            </Box>
        </>
    )
}

export default Loading