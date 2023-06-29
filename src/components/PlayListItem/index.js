import {AiOutlineDelete} from 'react-icons/ai'

import './index.css'

const PlayListItem = props => {
  const {songDetails, onDeleteSong} = props
  const {imageUrl, name, genre, duration, id} = songDetails
  const removeItem = () => {
    onDeleteSong(id)
  }

  return (
    <li>
      <div className="genre-container">
        <div className="image-container">
          <img className="song-logo" src={imageUrl} alt="track" />
          <div className="name-container">
            <p>{name}</p>
            <p className="genre">{genre}</p>
          </div>
        </div>
        <div className="delete-container">
          <p className="duration">{duration}</p>
          <button
            data-testid="delete"
            className="delete-btn"
            onClick={removeItem}
            type="button"
          >
            <AiOutlineDelete className="delete-icon" />
          </button>
        </div>
      </div>
    </li>
  )
}
export default PlayListItem
