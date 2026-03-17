import Image from 'next/image';
import styles from './DoctorAvatar.module.css';

interface DoctorAvatarProps {
  name: string;
  department?: string;
  size?: 'lg' | 'sm';
  imageSrc?: string;
}

function getInitials(name: string): string {
  return name
    .split(' ')
    .filter((w) => /^[A-Z]/.test(w))
    .map((w) => w[0])
    .slice(0, 2)
    .join('');
}

export default function DoctorAvatar({ name, department, size = 'lg', imageSrc }: DoctorAvatarProps) {
  const initials = getInitials(name);

  if (size === 'sm') {
    if (imageSrc) {
      return (
        <div className={styles.avatarSmImg}>
          <Image src={imageSrc} alt={name} width={52} height={52} className={styles.imgSm} />
        </div>
      );
    }
    return (
      <div className={styles.avatarSm}>
        <span className={styles.initialsSm}>{initials}</span>
      </div>
    );
  }

  if (imageSrc) {
    return (
      <div className={styles.avatarWithImage}>
        <Image
          src={imageSrc}
          alt={name}
          width={320}
          height={427}
          className={styles.img}
          priority
        />
      </div>
    );
  }

  return (
    <div className={styles.avatar}>
      <div className={styles.pattern} />
      <div className={styles.ring} />
      <span className={styles.initials}>{initials}</span>
      {department && (
        <span className={styles.deptLabel}>{department}</span>
      )}
    </div>
  );
}
