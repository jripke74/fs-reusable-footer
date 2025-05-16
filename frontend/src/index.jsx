import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faTruck } from '@fortawesome/free-solid-svg-icons';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';

export const Footer = () => {
  return (
    <>
      <footer>
        <ul>
          <li>
            <a href="#">Main Page</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#">What we do</a>
          </li>
          <li>
            <a href="#">Our Services</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#">Contact Us</a>
          </li>
          <li>
            <a href="#">Jobs</a>
          </li>
        </ul>
        <p>&copy; Ripke Enterprise Inc.</p>
        <ul>
          <li><a href="#"><FontAwesomeIcon icon={faThumbsUp} className="fa-fw" /></a></li>
          <li><a href="#"><FontAwesomeIcon icon={faTruck} className="fa-fw" /></a></li>
          <li><a href="#"><FontAwesomeIcon icon={faCircleUser} className="fa-fw" /></a></li>
        </ul>
      </footer>
    </>
  );
};
