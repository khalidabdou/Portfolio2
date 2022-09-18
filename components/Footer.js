import Link from './Link';
import siteMetadata from '@/data/siteMetadata';
import SocialIcon from '@/components/social-icons';
import { greeting, socialMediaLinks } from 'infos';

export default function Footer() {
  return (
    <footer>
      <div className="mt-16 mt-16 flex flex-col items-center">
        <div className="mb-3 flex space-x-4">
          <SocialIcon kind="mail" href={`mailto:${socialMediaLinks.email_address}`} size="5" />
          <SocialIcon kind="github" href={socialMediaLinks.github} size="5" />
          <SocialIcon kind="linkedin" href={socialMediaLinks.linkedin} size="5" />
        </div>
        <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>{` • `}</div>
          <div>{greeting.username}</div>
        </div>
        <div className="mb-8 flex flex-col space-x-2 text-sm text-gray-500 dark:text-gray-400 md:flex-row">
          <Link
            className="hover:text-primary-600 hover:underline dark:hover:text-primary-600"
            href="/"
          >
            home
          </Link>
          <Link
            className="hover:text-primary-600 hover:underline dark:hover:text-primary-600"
            href="/blog"
          >
            notes
          </Link>
          <Link
            className="hover:text-primary-600 hover:underline dark:hover:text-primary-600"
            href="/projects"
          >
            projects
          </Link>
          <Link
            className="hover:text-primary-600 hover:underline dark:hover:text-primary-600"
            href="/about"
          >
            about
          </Link>
        </div>
      </div>
    </footer>
  );
}
