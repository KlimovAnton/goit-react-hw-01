import clsx from "clsx";
import css from "./Profile.module.css";

export default function Profile({ name, tag, location, image, stats }) {
    return (
    <div className={css.container}>
        <div className={css.profile}>
            <img className={css.profileImg}
            src={image}
            alt="User avatar"
            />
            <p className={clsx(css.profileText, css.profileName)}>{name}</p>
            <p className={css.profileText}>@{tag}</p>
            <p className={css.profileText}>{location}</p>
        </div>

        <ul className={css.profileInfo}>
            <li className={css.profileItem}>
            <span  className={css.profileFollower}>Followers</span>
            <span className={css.profileCount}>{stats.followers}</span>
            </li>
            <li className={css.profileItem}>
            <span className={css.profileFollower}>Views</span>
            <span className={css.profileCount}>{stats.views}</span>
            </li>
            <li className={css.profileItem}>
            <span className={css.profileFollower}>Likes</span>
            <span className={css.profileCount}>{stats.likes}</span>
            </li>
        </ul>
    </div>
    )
    
}

