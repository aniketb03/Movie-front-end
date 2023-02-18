import { useState } from 'react';
import { IconButton } from '@mui/material';
import Badge from '@mui/material/Badge';

export function Counter() {
  const [like, setLike] = useState(0);
  const [dislike, setDisLike] = useState(0);

  const incrementLike=()=>setLike(like+1);
  const incrementDisLike=()=>setDisLike(dislike+1);
  return (
    <div>
      <IconButton  
      className="like-button"
      color="primary" 
      aria-label="Like button"
      onClick={incrementLike}
      >
      <Badge badgeContent={like} color="primary">
        👍
      </Badge>
      </IconButton>
        
      <IconButton  
      className="dislike-button"
      color="primary" 
      aria-label="Like button"
      onClick={incrementDisLike}
      >
      <Badge badgeContent={dislike} color="error">
        👎
      </Badge>
      </IconButton>  
      
      
    </div>
  );
}
