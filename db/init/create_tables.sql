-- NOTE: Do not create users table,
-- for local auth, which isn't being used.

-- CREATE TABLE IF NOT EXISTS users (
--   id SERIAL PRIMARY KEY,
--   email VARCHAR(100),
--   password TEXT
-- );

CREATE TABLE IF NOT EXISTS youtube_profiles (
  id SERIAL PRIMARY KEY,
  profile_id TEXT,
  display_name TEXT
);

CREATE TABLE IF NOT EXISTS playlist_videos (
  id SERIAL PRIMARY KEY,
  video TEXT,
  user_id INTEGER REFERENCES youtube_profiles(id)
);
