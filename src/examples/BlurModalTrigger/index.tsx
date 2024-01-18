import React, { FC, useState } from 'react';
import { OnModalClose } from '../../types';
import { useModal } from '../../useModal';
import { Button } from '../Button';
import { BlurModal } from '../modalTemplates/BlurModal';

type Props = {
  disableEsc: boolean;
  unlockBodyScroll: boolean;
};

export const BlurModalTrigger: FC<Props> = ({
  disableEsc = false,
  unlockBodyScroll = false,
}) => {
  const [isClosing, setIsClosing] = useState<boolean>(false);

  const onModalClose: OnModalClose = () => {
    console.log('Blur Modal Start Closing');

    setIsClosing(true);
    return () => {
      setIsClosing(false);
      console.log('Blur Modal Closed');
    };
  };

  const modalCloseDelay = () => {
    return 200;
  };

  const [Modal, openModal, closeModal] = useModal(BlurModal, {
    modalCloseDelay,
    onModalClose,
    disableEsc,
    unlockBodyScroll,
  });

  return (
    <>
      <Button onClick={openModal}>Open Blur Modal</Button>
      <Modal title='Blur Modal' {...{ isClosing, closeModal }}>
        <p>
          Duis cursus ex non ante porta, id maximus lorem luctus. Pellentesque
          nec mauris sed odio mollis congue id sit amet nibh. Duis viverra
          tortor in nunc vulputate imperdiet. Morbi ullamcorper sed mauris sed
          pellentesque. Quisque at ante imperdiet, ultricies dolor non,
          porttitor lectus. Donec commodo blandit nibh eu condimentum.
        </p>
        <p>
          Pellentesque lectus nisl, varius sed accumsan at, pretium non magna.
          In pharetra laoreet feugiat. Aliquam a risus diam. Quisque nisi ipsum,
          imperdiet lobortis pharetra non, condimentum vel tortor. Fusce turpis
          neque, volutpat in velit eget, ultricies feugiat elit. Proin sit amet
          lectus lorem. Nunc vitae neque sit amet felis malesuada rhoncus. Donec
          id est vitae ex consectetur porttitor vitae id sapien. Nam tincidunt
          bibendum ex eget mattis. In id luctus lectus.
        </p>
      </Modal>
    </>
  );
};
