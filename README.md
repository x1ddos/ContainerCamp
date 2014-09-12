A ContainerCamp demo.

## Setup

1. Make sure your [Kubernetes cluster][kubesetup] is running 
with a couple of pods.

2. Ensure your cluster is accessible from a webapp:

  2.1. Because Kubernetes is still using HTTP Basic Auth and self-signed certificate,
       you'll have to import that self-signed cert and make your browser trust it.

  2.2. Add the following line to  `/etc/hosts`:

        <kubernetes-master-ip-address> kubernetes.invalid

  kubernetes.invalid is the name Kubernetes uses for its self-signed cert.

3. Get the components: `bower install crhym3/ContainerCamp`.

   By default it should be installed in `bower_components/ContainerCamp` along with all
   the dependencies.

4. Open `ContainerCamp/index.html` and replace

   `auth="Basic YWRtaW46cHl2dklaNloxdU1HUjhMZAo="`

   attribute of `<kube-cluster>` tag with your cluster's password. You can find it in `~/.kubernetes_auth`.

   Here's how to get it in Base64 encoding on MacOS: `echo admin:<pwd> | base64`.

5. Start serving from `bower_components` as the root dir with any static HTTP server at hand and navigate to 
   `http://localhost/ContainerCamp/index.html`
  
  ![screen shot 2014-09-02 at 2 49 44 pm][screenshot]


[kubesetup]: https://github.com/GoogleCloudPlatform/kubernetes/blob/master/docs/getting-started-guides/gce.md "Kubernetes setup on GCE"
[screenshot]: https://cloud.githubusercontent.com/assets/25405/4119218/f0797dac-32a8-11e4-80ae-51aa8ccf9704.png
