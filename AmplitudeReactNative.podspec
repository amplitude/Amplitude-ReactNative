require 'json'

package = JSON.parse(File.read(File.join(__dir__, 'package.json')))

Pod::Spec.new do |s|
  s.name = "AmplitudeReactNative"
  s.version = package['version']
  s.summary = package['description']
  s.description = package['description']
  s.license = package['license']
  s.author = { 'Amplitude' => 'sdk.dev@amplitude.com' }
  s.homepage = package['homepage']
  s.platform = :ios, "9.0"
  s.swift_version = '5.0'
  s.source = { :git => "https://github.com/amplitude/Amplitude-ReactNative", :tag => s.version }
  s.source_files = "ios/*.{swift,h,m}"
  s.requires_arc = true
  s.preserve_paths = 'LICENSE', 'README.md', 'package.json', 'index.js'
  s.pod_target_xcconfig = { 'DEFINES_MODULE' => 'YES' }  
  
  s.dependency "React"
  s.dependency 'Amplitude', '7.2.0'
end
