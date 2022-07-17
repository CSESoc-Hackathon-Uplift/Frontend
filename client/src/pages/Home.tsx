import { useContext, useState, useEffect } from 'react'
import axios from 'axios'

import { Box, Button, Card, CardContent, CardMedia, Container, CssBaseline, Grid, Stack, Typography } from '@mui/material'
import LoadingButton from '@mui/lab/LoadingButton'
import { StarRounded } from '@mui/icons-material'
import IconButton from '@mui/material/IconButton'
import SearchIcon from '@mui/icons-material/Search'
import TextField from '@mui/material/TextField'

import { LazyLoadImage } from 'react-lazy-load-image-component'
import { ThemeContext } from '@emotion/react'
import './cardAnimation.css'

const Home = (clickCount, setClickCount) => {
  const [location, setLocation] = useState<null | String>(null)
  const [guests, setGuests] = useState<number>(0)

  const [searchQuery, setSearchQuery] = useState('')

  const [posts, setPosts] = useState([])
  const [finishedLoading, setFinishedLoading] = useState(true)

  const searchArticle = () => {
    let isMounted = true
    setFinishedLoading(false)
    fetch('http://127.0.0.1:8080/news?search=' + searchQuery + '&uuid=uuid1')
      .then((res) => res.json())
      .then((data) => {
        if (isMounted) {
          setPosts(data.articles)
          setFinishedLoading(true)
        }
      })
    return () => {
      isMounted = false
    }
  }

  const SearchBar = ({ searchQuery, setSearchQuery }) => (
    <form>
      <TextField
        id="search-bar"
        className="text"
        onInput={(e) => {
          setSearchQuery((e.target as HTMLInputElement).value)
        }}
        label="Search for an article"
        variant="outlined"
        placeholder="Search..."
        value={searchQuery}
        size="small"
      />
      <IconButton
        type="submit"
        aria-label="search"
        onClick={() => {
          searchArticle()
        }}
      >
        <SearchIcon style={{ fill: 'blue' }} />
      </IconButton>
    </form>
  )

  const newsList = (
    <Container>
      <Grid container spacing={2} paddingY={2} sx={{ maxWidth: 'lg' }}>
        {posts.map((post) => {
          return (
            <Grid item xs={12} sm={12} lg={12}>
              <Card
                className="newsCard"
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  gap: '30px',
                  borderRadius: '15px',
                  padding: 3,
                  boxShadow: 10,
                  background: 'unset',
                  height: '100%',
                  justifyContents: 'center',
                  alignItems: 'flex-start',
                }}
              >
                <CardMedia>
                  <LazyLoadImage
                    src={post['urlToImage']}
                    alt={post['title']}
                    height="450px"
                    width="500x"
                    effect={'opacity'}
                    style={{ borderRadius: '15px', aspectRatio: '394/267', objectFit: 'cover' }}
                  />
                </CardMedia>
                <CardContent sx={{ padding: 0, display: 'flex', gap: '14px', flexDirection: 'column', alignItems: 'flex-start' }}>
                  <Typography gutterBottom variant="h4" component="p" sx={{ fontWeight: 'bold' }}>
                    {post['description']}
                  </Typography>
                  <Box display={'flex'} flexDirection={'row'}>
                    <Button
                      variant="outlined"
                      size={'small'}
                      sx={{
                        fontSize: '0.7em',
                        borderStyle: 'none',
                        borderRadius: '20px',
                        lineHeight: 1.3,
                        textTransform: 'uppercase',
                        fontWeight: 'bold',
                        marginRight: '1em',
                      }}
                    >
                      {post['source']['name']}
                    </Button>
                    <Typography>{post['author']}</Typography>
                  </Box>
                  <Stack direction="row" alignItems="center" gap={0.5}>
                    <StarRounded color="secondary" />
                    <Typography variant="body2" component="span">
                      {post['rating']}
                    </Typography>
                  </Stack>
                  <Typography>{post['content']}</Typography>
                  <Button
                    variant="outlined"
                    size={'large'}
                    onClick={() => {
                      window.open(post['url'], '_blank')
                      const params = {
                        uuid: 'uuid1',
                        title: post['title'],
                        source: post['source']['name'],
                        content: post['content'],
                        description: post['description'],
                        author: post['author'],
                      }
                      const options = {
                        method: 'POST',
                        headers: {
                          'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(params),
                      }
                      fetch('http://127.0.0.1:8080/history/add', options).then((response) => response)
                    }}
                    sx={{
                      fontSize: '0.7em',
                      height: '40px',
                      marginTop: '10px',
                      borderRadius: '35px',
                      lineHeight: 1.3,
                      textTransform: 'uppercase',
                      fontWeight: 'bold',
                      marginRight: '1em',
                    }}
                  >
                    Read more
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          )
        })}
      </Grid>
    </Container>
  )

  return (
    <Container>
      <Grid container spacing={2} paddingY={2} sx={{ maxWidth: 'lg' }}>
        <Grid item xs={12}>
          <Box display={'flex'} justifyContent={'space-between'} alignItems={'flex-end'}>
            <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold' }}>
              Newsfeed
            </Typography>
            <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          </Box>
        </Grid>
      </Grid>
      {!finishedLoading && <img src="https://i.stack.imgur.com/ATB3o.gif" alt={'loading'} />}
      {finishedLoading && <p>Please enter a query.</p>}
      {finishedLoading && posts != [] && newsList}
    </Container>
  )
}

export default Home
