import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border">
      <div className="container py-10 grid gap-4 md:grid-cols-[1fr_auto_1fr] items-center">
        <p className="text-sm text-muted-foreground text-center md:col-start-2">
          © {new Date().getFullYear()} IA Academy
        </p>
        <nav className="flex items-center justify-center md:justify-end gap-4 text-muted-foreground md:col-start-3">
          <a
            href="https://github.com/Empreiteiro/gen-ai-pathways"
            aria-label="GitHub"
            className="hover:text-foreground"
          >
            <Github />
          </a>
          <a
            href="https://www.linkedin.com/in/lucas-democh-goularte-8b290356/"
            aria-label="LinkedIn"
            className="hover:text-foreground"
          >
            <Linkedin />
          </a>
          <a
            href="mailto:democh@oriontech.me"
            aria-label="Email"
            className="hover:text-foreground"
          >
            <Mail />
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;


