import Paper from "@mui/material/Paper"
import yellow from "@mui/material/colors/yellow"
import { styled } from '@mui/material/styles';

const PostPaper = styled(Paper)`
  background-color: ${yellow[200]};
`;

const Post = (props) => {
  return (
    <PostPaper>
      <p className="item">{ props.number }. { props.title }</p>
    </PostPaper>
  )
}

export default Post