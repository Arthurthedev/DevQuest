import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import styled, {css} from "styled-components"

async function getPost(id) {
    const response = await fetch(`http://localhost:3000/json/post-${id}.json`)
    return await response.json()
}

const PostsDetails = () => {
    const [post, setPost] = useState({})

    const {id} = useParams()

    useEffect(() => {
        async function fetchData() {
            const post = await getPost(id)
            setPost(post.data)
        }

        fetchData()
    }, [])

    return (
        <Section red>
            <Link to="/">Voltar para a pagina principal</Link>
                <div>
                        <Img src={post.image} alt={post.tittle} />
                        <h2>{post.title}</h2>
                        <p>{post.text}</p>
                </div>
        </Section>
    )
}

const Section = styled.section`
    padding: 50px;
    background-color: blue;
    ${props => props.red && css `
    background-color: red;`}
`

const Img = styled.img`
    margin-top: 15px;
`
export { PostsDetails } 