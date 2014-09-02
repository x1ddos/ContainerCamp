A ContainerCamp demo.

## Setup

0. Make sure your [Kubernetes cluster](https://github.com/GoogleCloudPlatform/kubernetes/blob/master/docs/getting-started-guides/gce.md) is running 
with a couple of pods.

1. Clone the repo and run `bower install` from within the root of the cloned copy.

2. Start kube proxy with `kubecfg.sh --proxy --www <root-of-cloned-repo>`.

3. Navigate to http://localhost:8001/static/
