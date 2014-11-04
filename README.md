A ContainerCamp demo.

## Setup

1. Make sure your [Kubernetes cluster][kubesetup] is running,
even better with a couple of pods so that you can see immediately
whether the connection to the Kubernetes API server is working.

   Unfortunately, release [v0.4.3][v0.4.3] still contains a [kubecfg proxy bug][bug],
   so you'll have to either wait for a new release or build the `kubecfg` tool
   from source code yourself.

2. Get the components: `bower install crhym3/ContainerCamp`.

   By default it should be installed in `bower_components/ContainerCamp` along with all
   the dependencies.

   If you've ever asked about polymer/platform version resolution,
   choose `0.4.2`.

3. Start Kubernetes proxy and make it serve static assets from `bower_components`:

   `kubecfg -proxy -www bower_components`

   If you've built `kubecfg` yourself, don't forget to let it know where to find
   the master before starting the proxy:

   `export KUBERNETES_MASTER=https://1.2.3.4`

4. Navigate to `http://localhost:8001/static/ContainerCamp/`

  ![screen shot 2014-09-02 at 2 49 44 pm][screenshot]


[kubesetup]: https://github.com/GoogleCloudPlatform/kubernetes/blob/master/docs/getting-started-guides/gce.md "Kubernetes setup on GCE"
[screenshot]: https://cloud.githubusercontent.com/assets/25405/4119218/f0797dac-32a8-11e4-80ae-51aa8ccf9704.png
[v0.4.3]: https://github.com/GoogleCloudPlatform/kubernetes/releases/tag/v0.4.3
[bug]: https://github.com/GoogleCloudPlatform/kubernetes/issues/1149
