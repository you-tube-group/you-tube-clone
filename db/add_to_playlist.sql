insert into playlist_videos
  (user_id, video)
  values
  ($2, $1)
  RETURNING *;
