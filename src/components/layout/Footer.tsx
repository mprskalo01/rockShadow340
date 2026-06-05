import SocialLink from '../ui/SocialLink'
import { LinkedInIcon, GitHubIcon, MailIcon } from '../icons/SocialIcons'

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-[var(--color-border)]">
      <div className="mx-auto max-w-5xl px-6 py-24 md:px-12 md:py-36">
        <p className="font-mono text-xs font-semibold uppercase tracking-widest text-[var(--color-accent)]">
          Contact
        </p>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-[var(--color-text)] md:text-4xl">
          Get in touch
        </h2>
        <p className="mt-4 max-w-md text-base leading-relaxed text-[var(--color-muted)]">
          Open to new opportunities — reach out via email or connect on social.
        </p>

        <a
          href="mailto:mario.prskalo5@gmail.com?subject=Reaching%20Out%20from%20Your%20Portfolio"
          className="mt-6 inline-block text-lg font-semibold text-[var(--color-text)] underline underline-offset-4 decoration-[var(--color-border)] transition-colors duration-150 hover:text-[var(--color-accent)] hover:decoration-[var(--color-accent)]"
        >
          mario.prskalo5@gmail.com
        </a>

        <div className="mt-8 flex items-center gap-6">
          <SocialLink
            href="https://www.linkedin.com/in/mprskalo01/"
            label="LinkedIn"
            icon={<LinkedInIcon className="h-6 w-6" />}
          />
          <SocialLink
            href="https://github.com/mprskalo01"
            label="GitHub"
            icon={<GitHubIcon className="h-6 w-6" />}
          />
          <SocialLink
            href="mailto:mario.prskalo5@gmail.com?subject=Reaching%20Out%20from%20Your%20Portfolio"
            label="Email"
            icon={<MailIcon className="h-6 w-6" />}
          />
        </div>
      </div>

      <div className="border-t border-[var(--color-border)]">
        <div className="mx-auto max-w-5xl px-6 py-6 md:px-12">
          <p className="text-xs text-[var(--color-muted)]">
            © {new Date().getFullYear()} Mario Prskalo. Designed and built with React &amp; TypeScript.
          </p>
        </div>
      </div>
    </footer>
  )
}
