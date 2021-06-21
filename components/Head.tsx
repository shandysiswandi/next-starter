import BaseHead from 'next/head';

type HeadData = {
  title: string;
  description?: string;
};

export const Head = ({ title, description }: HeadData) => {
  return (
    <BaseHead>
      <title>{title}</title>
      <meta
        name='description'
        content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quae
        quaerat neque perspiciatis, pariatur impedit. Dolor sit consectetur ea
        ducimus! Voluptate excepturi, officiis beatae officia natus, odio
        repellendus temporibus doloribus exercitationem molestias fugit
        praesentium laborum placeat nesciunt voluptatibus fuga quasi, obcaecati
        quaerat autem harum omnis optio eligendi in! Perspiciatis beatae dolore
        unde, vitae provident aliquid error accusantium incidunt iste dolores
        eos. Expedita quas modi enim quaerat rem omnis, quasi accusamus, earum
        magni aliquid illum illo, perspiciatis totam dolores iste pariatur
        ullam? Eligendi suscipit eum, nulla esse aliquam ducimus minus expedita
        minima totam dolorum sapiente magnam, deserunt saepe beatae enim
        architecto, ipsa quidem fugit amet in a? A debitis rerum odit et! Porro,
        praesentium velit! Recusandae quisquam quasi rerum enim sed, nisi
        voluptatibus obcaecati. Eum impedit dicta officia, ab illo pariatur
        repellat harum delectus officiis, nemo possimus sed. Harum ad laborum,
        eius accusantium, doloremque sequi quod labore corporis quos,
        perspiciatis iure repellat consectetur optio tempore debitis molestias
        soluta blanditiis. Similique distinctio, rerum odit quisquam quo,
        voluptatem natus quis numquam facilis deserunt libero sequi corrupti.
        Sequi, eaque blanditiis id, autem vero veritatis necessitatibus quis
        nulla odio perspiciatis accusantium voluptatibus amet? Dolores
        laudantium magni laboriosam sunt architecto quasi sapiente voluptate
        blanditiis, nam quo?'
      />
    </BaseHead>
  );
};
