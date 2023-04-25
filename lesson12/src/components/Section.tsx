import { ReactNode } from 'react';

type SectionProps = {
  title?: string;
  children: ReactNode;
};

export const Section = ({
  children,
  title = 'My Subheadint',
}: SectionProps) => {
  return (
    <section>
      <h2>{title}</h2>
      <p>{children}</p>
    </section>
  );
};

//note: old way 👇
// import React from 'react';
// export const Section: React.FC<{ title: string }> = ({ children, title }) => {
//   return (
//     <section>
//       <h2>{title}</h2>
//       <p>{children}</p>
//     </section>
//   );
// };
