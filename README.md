A ContainerCamp demo.

## Setup

0. Make sure your [Kubernetes cluster][kubesetup] is running 
with a couple of pods.

1. Run `bower install` from within the root of the cloned copy.

2. Start kube proxy with 

  `kubecfg.sh --proxy --www <root-of-cloned-repo>`

3. Navigate to `http://localhost:8001/static/`
  
  ![screen shot 2014-09-02 at 2 49 44 pm][screenshot]


[kubesetup]: https://github.com/GoogleCloudPlatform/kubernetes/blob/master/docs/getting-started-guides/gce.md "Kubernetes setup on GCE"
[screenshot]: https://cloud.githubusercontent.com/assets/25405/4119218/f0797dac-32a8-11e4-80ae-51aa8ccf9704.png
