import Paper from "@mui/material/Paper"
import yellow from "@mui/material/colors/yellow"
import { styled } from '@mui/material/styles';

const PostPaper = styled(Paper)`
  background-color: ${yellow[200]};
`;

const Post = () => {
  return (
    <PostPaper>
      <p className="item">The Post</p>
    </PostPaper>
  )
}

export default Post