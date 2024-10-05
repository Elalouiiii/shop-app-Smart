import { useTheme } from '@emotion/react'
import { AccessAlarmOutlined, CreditScoreOutlined, ElectricBolt, SubtitlesOff, WorkspacePremiumOutlined } from '@mui/icons-material'
import { Box, Container, Divider, Stack, Typography } from '@mui/material'


export default function IconSection() {
    return (
        <Container sx={{pt:2}}>
            <Stack  divider={<Divider orientation="vertical" flexItem />} direction={"row"} alignItems={"center"} sx={{flexWrap:"wrap",}}>
                <MyBox icon={<ElectricBolt fontSize='large' />} title={"Fast Delivery"} subTitle={"Start From 10$"} />
                <MyBox icon={<WorkspacePremiumOutlined />} title={"Money Guarante"} subTitle={"7 Days Back"} />
                <MyBox icon={<AccessAlarmOutlined />} title={"365 Days"} subTitle={"For Free Return"} />
                <MyBox icon={<CreditScoreOutlined />} title={"Payment"} subTitle={"Secure system"} />




            </Stack>
        </Container>
    )
}



const MyBox = ({ icon, title, subTitle }) => {
    const theme = useTheme();
    return (
        <Box sx={{
            width: 250,
            display: "flex",
            flexGrow: 1,
            alignItems: "center",
            gap: 3,
            justifyContent: "center",py:1.6,
        }}>
            {icon}
            <Box>
                <Typography variant='body1'>{title}</Typography>
                <Typography
                    sx={{
                        fontWeight: 300, color: theme.palette.text.secondary
                    }}
                    variant='body1'
                >
                    {subTitle}
                </Typography>
            </Box>
        </Box>
    )
}
