
import { bootstrapCameraKit } from '@snap/camera-kit';

(async function () {
  const cameraKit = await bootstrapCameraKit({
    apiToken: 'eyJhbGciOiJIUzI1NiIsImtpZCI6IkNhbnZhc1MyU0hNQUNQcm9kIiwidHlwIjoiSldUIn0.eyJhdWQiOiJjYW52YXMtY2FudmFzYXBpIiwiaXNzIjoiY2FudmFzLXMyc3Rva2VuIiwibmJmIjoxNzA5ODE3NTQ1LCJzdWIiOiI3MjE0YjdjNi0zZTIzLTRhOWMtOTkwMS0xNjI4YjUxOGNiMGV-U1RBR0lOR341YmYwZDhhNy1jZjhjLTRjMmMtYjgyNS0zNDY1YjY2MjAyOTcifQ.N631Sj7y6GckzndOhaDB87gbC0vx8DCMSk2ci_24Aoo',
  });
  const liveRenderTarget = document.getElementById(
    'canvas'
  ) as HTMLCanvasElement;
  const session = await cameraKit.createSession({ liveRenderTarget });
  const mediaStream = await navigator.mediaDevices.getUserMedia({
    video: true,
  });

  await session.setSource(mediaStream);
  await session.play();

  const lens = await cameraKit.lensRepository.loadLens(
    "ecfa18a7-3d4b-42e0-8535-c1c3af0ef8a4",
    "3b21bf94-5723-494d-91a9-608a384dcfe4"
  );

  await session.applyLens(lens);
})();
