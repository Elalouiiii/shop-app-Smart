// @ts-nocheck
import { Box, Button, Container, Link, Stack, Typography } from '@mui/material'
import imghero1 from "./images/imageHero03.jpg"
import imghero2 from "./images/imageHero04.jpg"
import { ArrowForward } from '@mui/icons-material'
import { Swiper, SwiperSlide } from 'swiper/react';

import { Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './slider.css'






export default function Hero() {
  return (
    <div>
      <Container sx={{ display: "flex", alignItems: "center", mt: 2.5, gap: 2, }}>


        <Swiper
        loop={true}
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <Box sx={{
            marginRight: "12%"
          }}>
            <SwiperSlide>
              <img src="src\components\images\imageSlider07.jpg" alt="" />
              <Box sx={{
                position: 'absolute',
                left: "10%",


              }}>
                <Typography

                  sx={{
                    color: '#283445',

                  }}
                  variant='h5'
                >
                  LIFESTYLE COLLECTION
                </Typography>
                <Typography

                  sx={{
                    color: '#283445',
                    fontWeight: 400,
                    my: 1,
                  }}
                  variant='h3'
                >
                  MEN
                </Typography>
                <Stack>
                  <Typography

                    sx={{
                      color: '#283445',

                    }}
                    variant='h5'
                  >
                    We have Evrything You Need
                  </Typography>
                  <Typography
                    sx={{
                      color: '#000', fontWeight: 300, my: 1,
                    }}
                    variant='body1'
                  >
                    Get Free Shopping on order over $99.00
                  </Typography>
                  <Button
                    sx={{
                      px: 5,
                      py: 1,
                      mt: 2,
                      backgroundColor: '#222',
                      boxShadow: '0px 4px 16px rgba(43, 52, 69, 0.1)',
                      color: '#ffff',
                      borderRadius: 1,
                      "&:hover": {
                        bgcolor: '#151515',
                        boxShadow: '0px 4px 16px rgba(43, 52, 69, 0.1)',

                      }
                    }}
                    variant='container'
                  >
                    SHOP NOW
                  </Button>
                </Stack>




              </Box>

            </SwiperSlide>
            <SwiperSlide>
              <img src="src\imageProduct\imageHerotWomen03.png" alt="" />
              <Box sx={{
                position: 'absolute',
                left: "10%",


              }}>
                <Typography

                  sx={{
                    color: '#080808',

                  }}
                  variant='h5'
                >
                  LIFESTYLE COLLECTION FOR WOMENS
                </Typography>
                <Typography

                  sx={{
                    color: '#2b2b2b',
                    fontWeight: 400,
                    my: 1,
                  }}
                  variant='h3'
                >
                  WOMENS
                </Typography>
                <Stack>
                  <Typography

                    sx={{
                      color: '#000000',

                    }}
                    variant='h5'
                  >
                    We have Evrything You Need
                  </Typography>
                  <Typography
                    sx={{
                      color: '#f1ffe5', fontWeight: 300, my: 1,
                    }}
                    variant='body1'
                  >
                    Get Free Shopping on order over $99.00
                  </Typography>
                  <Button
                    sx={{
                      px: 5,
                      py: 1,
                      mt: 2,
                      backgroundColor: '#dd8d8d',
                      boxShadow: '0px 4px 16px rgba(171, 248, 147, 0.1)',
                      color: '#ffff',
                      borderRadius: 1,
                      "&:hover": {
                        bgcolor: '#565454',
                        boxShadow: '0px 4px 16px rgba(252, 240, 214, 0.826)',

                      }
                    }}
                    variant='container'
                  >
                    SHOP NOW
                  </Button>
                </Stack>




              </Box>

            </SwiperSlide>

          </Box>

        </Swiper>





        <Stack sx={{
          display: { xs: "none", md: "block" },
          width: '47%',
        }}>
          <Box sx={{
            position: 'relative',
          }}>
            <img src={imghero1} width={"100%"} height={'250px'} alt="" />


            <Stack sx={{
              position: 'absolute',
              top: "35%",
              transform: "translateY(-50%)",
              left: 24

            }}>
              <Typography
                variant='caption'
                sx={{
                  color: '#283445',
                  fontSize: '18px',
                }}
              >
                NEW ARRIVALS :
              </Typography>
              <Typography
                variant='h6'
                sx={{
                  color: '#283445',
                  lineHeight: '18px',
                  mt: 1,
                }}
              >
                SUMMER SHOP
              </Typography>




              <Typography
                variant='h6'
                sx={{
                  color: '#283445',
                }}
              >
                SALE 20% OFF
              </Typography>


              <Link
                sx={{
                  color: '#283445',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px',
                  transition: '0.2s',
                  "&:hover": { color: "#D23F57", }
                }}
                href='#'
                underline="none"
              >

                shop now
                <ArrowForward sx={{ fontSize: '13px' }} />
              </Link>
            </Stack>




          </Box>
          <Box className="border"
            sx={{
              position: 'relative',
            }}
          >
            <img src={imghero2} width={"100%"} height={'250px'} alt="" />
            <Stack sx={{
              position: 'absolute',
              top: "45%",
              transform: "translateY(-50%)",
              left: 24

            }}>
              <Typography
                variant='caption'
                sx={{
                  color: '#283445',
                  fontSize: '18px',
                }}
              >
                NEW FOLDER SHOP :
              </Typography>
              <Typography
                variant='h6'
                sx={{
                  color: '#283445',
                  lineHeight: '18px',
                  mt: 1,
                }}
              >
                SHOP YOUR KIDS NAW
              </Typography>




              <Typography
                variant='h6'
                sx={{
                  color: '#283445',
                }}
              >
                BEST OF KIDS FASHION :
              </Typography>


              <Link
                sx={{
                  color: '#283445',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px',
                  transition: '0.2s',
                  "&:hover": { color: "#D23F57", }
                }}
                href='#'
                underline="none"
              >

                shop now
                <ArrowForward sx={{ fontSize: '13px' }} />
              </Link>
            </Stack>

          </Box>
        </Stack>

      </Container>

    </div>
  )
}
